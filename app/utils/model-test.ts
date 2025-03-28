// 模型测试服务

import { showToast } from "../components/ui-lib";

// 测试结果接口
export interface ModelTestResult {
  success: boolean;
  message: string;
  responseTime?: number;
  error?: any;
  timeout?: boolean;
  cancelled?: boolean;
}

// 测试模型可用性
export async function testModel(
  model: string,
  apiKey: string,
  baseUrl: string = "https://api.openai.com",
  timeoutSeconds: number = 5,
  signal?: AbortSignal,
): Promise<ModelTestResult> {
  const startTime = Date.now();

  try {
    // 创建AbortController用于超时控制
    const controller = new AbortController();

    // 合并外部信号和超时信号
    const timeoutId = setTimeout(
      () => controller.abort(),
      timeoutSeconds * 1000,
    );

    // 如果外部信号被触发，也要中止请求
    if (signal) {
      signal.addEventListener("abort", () => {
        controller.abort();
        clearTimeout(timeoutId);
      });
    }

    // 构建请求URL
    const url = `${baseUrl}/v1/chat/completions`;

    // 构建请求体
    const requestBody = {
      model: model,
      messages: [
        {
          role: "user",
          content: "Hello!",
        },
      ],
      max_tokens: 1,
      stream: false,
    };

    // 发送请求
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(requestBody),
      signal: controller.signal,
    });

    // 清除超时计时器
    clearTimeout(timeoutId);

    const responseTime = Date.now() - startTime;

    // 检查响应
    if (!response.ok) {
      const errorData = await response.json();
      return {
        success: false,
        message: `测试失败: ${errorData.error?.message || response.statusText}`,
        responseTime,
        error: errorData,
        timeout: false,
      };
    }

    const data = await response.json();

    return {
      success: true,
      message: `测试成功! 响应时间: ${(responseTime / 1000).toFixed(2)}s`,
      responseTime,
      timeout: false,
    };
  } catch (error: any) {
    const responseTime = Date.now() - startTime;
    const isTimeout = error.name === "AbortError";

    // 如果是外部中止，则返回特殊标记
    if (signal?.aborted) {
      return {
        success: false,
        message: "测试已取消",
        responseTime,
        error,
        timeout: false,
        cancelled: true,
      };
    }

    return {
      success: false,
      message: isTimeout ? "请求超时" : `测试出错: ${error.message}`,
      responseTime,
      error,
      timeout: isTimeout,
    };
  }
}

// 批量测试多个模型
export async function testModels(
  models: string[],
  apiKey: string,
  baseUrl: string = "https://api.openai.com",
  timeoutSeconds: number = 5,
  showStartToast: boolean = true,
  signal?: AbortSignal,
  onModelTested?: (
    modelId: string,
    result: ModelTestResult,
    allResults?: Record<string, ModelTestResult>,
  ) => void,
): Promise<Record<string, ModelTestResult>> {
  const results: Record<string, ModelTestResult> = {};

  // 仅在showStartToast为true时显示开始测试的提示
  if (showStartToast) {
    showToast(`开始测试 ${models.length} 个模型...`);
  }

  // 逐个测试模型
  for (const model of models) {
    // 检查是否已取消
    if (signal?.aborted) {
      break;
    }

    results[model] = await testModel(
      model,
      apiKey,
      baseUrl,
      timeoutSeconds,
      signal,
    );

    // 调用单个模型测试完成的回调，传递累积的测试结果
    if (onModelTested && !signal?.aborted) {
      onModelTested(model, results[model], { ...results });
    }

    // 显示每个模型的测试结果
    if (!signal?.aborted) {
      if (results[model].success) {
        showToast(
          `${model}: 测试成功 (${(
            (results[model].responseTime || 0) / 1000
          ).toFixed(2)}s)`,
        );
      } else if (results[model].timeout) {
        showToast(`${model}: 超时`);
      } else {
        const errorMessage = results[model].message || "测试失败";
        showToast(`${model}: ${errorMessage}`);
      }
    }

    // 添加短暂延迟，确保状态更新被应用
    if (!signal?.aborted) {
      await new Promise<void>((resolve) => {
        setTimeout(() => resolve(), 10);
      });
    }
  }

  return results;
}
