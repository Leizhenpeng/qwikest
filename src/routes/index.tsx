import { component$, useContext } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {
  $translate as t, Speak
} from "qwik-speak";
import type { ICommonContext } from "~/store";
import { CommonContext, useCommon } from "~/store";
import Logo from "~/assets/people.svg?component"
import IcBaselineAccessibilityNew from '~icons/ic/baseline-accessibility-new'
export default component$(() => {
  const commonStore = useContext(CommonContext) as ICommonContext;
  return (
    <Speak assets={ ["common"] }>

      <div class={`min-h-[30vh] bg-[#EFF5F5] `}>
        <h1 class={`flex justify-center gap-2 align-bottom pt-14` }>
          <Logo height="40px" width="40px" />
          <p class="text-2xl leading-[40px]">
          { t("common.welcome@@welcome to") } Qwik
          </p>
          <IcBaselineAccessibilityNew height="40px" width="40px" color={`#006ce9`}/>
        </h1>


        <div class={`w-full flex justify-center gap-2 mt-8`}>
          <button class="bg-blue-400 hover:bg-blue-500 text-sm text-white font-mono font-light py-2 px-4 rounded-lg border-2 border-blue-200" onClick$={
            () => {
              useCommon.increment(commonStore)
            }
          }>
            {
              t("common.btn@@Click Me {{count}} Times", {
                count: commonStore.count
              })
            }
          </button>
        </div>

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
