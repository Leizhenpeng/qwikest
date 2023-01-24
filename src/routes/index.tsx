import { component$, useContext } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {
  $translate as t, Speak
} from "qwik-speak";
import type { ICommonContext } from "~/store";
import { CommonContext, useCommon } from "~/store";

export default component$(() => {
  const commonStore = useContext(CommonContext) as ICommonContext;
  return (
    <Speak assets={ ["common"] }>

      <div>
        <h1 class={`text-2xl text-center my-10`}>
          { t("common.welcome@@welcome to") } Qwik <span class="lightning">⚡️</span>
        </h1>

        <button class="mindblow " onClick$={
          () => {
            useCommon.increment(commonStore)
          }
        } >
          {
            t("common.btn",{
              count: commonStore.count
            })
          }
        </button>
      </div>
    </Speak>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description"
    }
  ]
};
