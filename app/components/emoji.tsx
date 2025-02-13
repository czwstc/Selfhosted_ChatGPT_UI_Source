import EmojiPicker, {
  Emoji,
  EmojiStyle,
  Theme as EmojiTheme,
} from "emoji-picker-react";

import { ModelType } from "../store";

import ClaudeIcon from "../icons/claude-color.svg";
import DallEIcon from "../icons/dalle-color.svg";
import GeminiIcon from "../icons/gemini-color.svg";
import DouBaoIcon from "../icons/doubao-color.svg";
import HunYuanIcon from "../icons/hunyuan-color.svg";
import MetaIcon from "../icons/meta-color.svg";
import CohereIcon from "../icons/cohere-color.svg";
import DeepseekIcon from "../icons/deepseek-color.svg";
import MoonShotIcon from "../icons/moonshot.svg";
import GlmIcon from "../icons/qingyan-color.svg";
import GrokIcon from "../icons/grok.svg";
import Gpt35Icon from "../icons/openai-3.5.svg";
import QwenIcon from "../icons/qwen-color.svg";
import OpenAIIcon from "../icons/openai.svg";
import WenXinIcon from "../icons/wenxin-color.svg";
import NeatIcon from "../icons/neat.svg";

import "../styles/model-avatar.scss";

export function getEmojiUrl(unified: string, style: EmojiStyle) {
  // Whoever owns this Content Delivery Network (CDN), I am using your CDN to serve emojis
  // Old CDN broken, so I had to switch to this one
  // Author: https://github.com/H0llyW00dzZ
  return `https://fastly.jsdelivr.net/npm/emoji-datasource-apple/img/${style}/64/${unified}.png`;
}

export function AvatarPicker(props: {
  onEmojiClick: (emojiId: string) => void;
}) {
  return (
    <EmojiPicker
      width={"100%"}
      lazyLoadEmojis
      theme={EmojiTheme.AUTO}
      getEmojiUrl={getEmojiUrl}
      onEmojiClick={(e) => {
        props.onEmojiClick(e.unified);
      }}
    />
  );
}

export function Avatar(props: { model?: ModelType; avatar?: string }) {
  if (props.model) {
    return (
      <div className="no-dark">
        {(() => {
          const model = props.model?.toLowerCase() || "";

          if (model.includes("claude")) {
            return (
              <ClaudeIcon className="user-avatar model-avatar" alt="Claude" />
            );
          }

          if (model.includes("dall")) {
            return (
              <DallEIcon className="user-avatar model-avatar" alt="DALL-E" />
            );
          }

          if (model.includes("wenxin") || model.includes("ernie")) {
            return (
              <WenXinIcon className="user-avatar model-avatar" alt="WenXin" />
            );
          }

          if (model.includes("doubao")) {
            return (
              <DouBaoIcon className="user-avatar model-avatar" alt="DouBao" />
            );
          }

          if (model.includes("hunyuan")) {
            return (
              <HunYuanIcon className="user-avatar model-avatar" alt="HunYuan" />
            );
          }

          if (model.includes("gemini")) {
            return (
              <GeminiIcon className="user-avatar model-avatar" alt="Gemini" />
            );
          }

          if (model.includes("llama")) {
            return <MetaIcon className="user-avatar model-avatar" alt="Meta" />;
          }

          if (model.includes("gpt-3.5") || model.includes("gpt3")) {
            return (
              <Gpt35Icon className="user-avatar model-avatar" alt="GPT-3.5" />
            );
          }

          if (
            model.startsWith("gpt-4") ||
            model.startsWith("chatgpt-4o") ||
            model.startsWith("o1") ||
            model.startsWith("o3")
          ) {
            return (
              <OpenAIIcon className="user-avatar model-avatar" alt="OpenAI" />
            );
          }

          if (model.includes("command")) {
            return (
              <CohereIcon className="user-avatar model-avatar" alt="Cohere" />
            );
          }

          if (model.includes("deepseek")) {
            return <DeepseekIcon className="user-avatar model-avatar" />;
          }

          if (model.includes("moonshot") || model.includes("kimi")) {
            return (
              <MoonShotIcon
                className="user-avatar model-avatar"
                alt="MoonShot"
              />
            );
          }

          if (model.includes("glm")) {
            return <GlmIcon className="user-avatar model-avatar" alt="GLM" />;
          }

          if (model.includes("grok")) {
            return <GrokIcon className="user-avatar model-avatar" alt="Grok" />;
          }

          if (model.includes("qwen")) {
            return <QwenIcon className="user-avatar model-avatar" alt="Qwen" />;
          }

          return <NeatIcon className="user-avatar model-avatar" alt="Logo" />;
        })()}
      </div>
    );
  }

  return (
    <div className="user-avatar">
      {props.avatar && <EmojiAvatar avatar={props.avatar} />}
    </div>
  );
}

export function EmojiAvatar(props: { avatar: string; size?: number }) {
  return (
    <Emoji
      unified={props.avatar}
      size={props.size ?? 18}
      getEmojiUrl={getEmojiUrl}
    />
  );
}
