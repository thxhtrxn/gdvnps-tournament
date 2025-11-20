import type { ComponentProps, ValidComponent } from "solid-js";
import { splitProps, Show } from "solid-js";

import { Root as ButtonPrimitive } from "@kobalte/core/button";
import { Root as ButtonLinkPrimitive } from "@kobalte/core/link";
import { cva, type VariantProps } from "class-variance-authority";
import styles from "./button.module.scss";

export const buttonVariants = cva(styles.button, {
  variants: {
    variant: {
      default: styles["button--primary"],
      destructive: styles["button--destructive"],
      outline: styles["button--outline"],
      secondary: styles["button--secondary"],
      ghost: styles["button--ghost"],
      link: styles["button--link"],
    },
    size: {
      default: styles["button--size-default"],
      sm: styles["button--size-sm"],
      lg: styles["button--size-lg"],
      icon: styles["button--size-icon"],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export type ButtonProps<T extends ValidComponent = "button"> = ComponentProps<
  typeof ButtonPrimitive<T>
> &
  VariantProps<typeof buttonVariants>;

export function Button(props: ButtonProps) {
  const [, rest] = splitProps(props as ButtonProps, ["variant", "size", "class", "type"]);

  return (
    <Show
      when={props.type === "link"}
      fallback={
        <ButtonPrimitive
          type="button"
          data-slot="button"
          gdvnps-comp="button"
          class={buttonVariants({
            variant: props.variant,
            size: props.size,
            className: props.class,
          })}
          {...rest}
        />
      }
    >
      <ButtonLinkPrimitive
        type="button"
        data-slot="button"
        gdvnps-comp="button-link"
        class={buttonVariants({
          variant: props.variant,
          size: props.size,
          className: props.class,
        })}
        {...rest}
      />
    </Show>
  );
}
