import { component$, useClientEffect$, useStylesScoped$ } from "@builder.io/qwik";
import { QwikLogo } from "../icons/qwik";
import styles from "./header.css?inline";
import type { SpeakLocale} from "qwik-speak";
import { changeLocale, useSpeakContext } from "qwik-speak";
import { config } from "~/speak-config";

export const setLocale = (locale: SpeakLocale) => {
  localStorage.setItem("locale", JSON.stringify(locale));
};

export const getLocale = () => {
  return JSON.parse(localStorage.getItem("locale") || "null") || config.defaultLocale;
};

export default component$(() => {
  useStylesScoped$(styles);
  const ctx = useSpeakContext();

  useClientEffect$(async () => {
    const locale = getLocale() as SpeakLocale;
    changeLocale(locale, ctx).then(
      () => {
        setLocale(locale);
      }
    );
  });

  return (
    <header>
      <div class="logo">
        <a href="https://qwik.builder.io/" target="_blank" title="qwik">
          <QwikLogo />
        </a>
      </div>
      <ul>
        <li>
          <a href="https://qwik.builder.io/docs/components/overview/" target="_blank">
            Docs
          </a>
        </li>
        <li>
          <a href="https://qwik.builder.io/examples/introduction/hello-world/"
             target="_blank">
            Examples
          </a>
        </li>
        <li>
          <a href="https://qwik.builder.io/tutorial/welcome/overview/" target="_blank">
            Tutorials
          </a>
        </li>
        <li>
          <select className="select w-full max-w-xs" onChange$={ (e:any) => {
            const lang = e.target.value ;
            const localeNow = ctx.config.supportedLocales.find((l) => l.lang == lang) as SpeakLocale;
            changeLocale(localeNow, ctx).then(
              () => {
                setLocale(localeNow);
              }
            );
          }}>
            <option disabled selected >I18n</option>
            {
              ctx.config.supportedLocales.map(locale => (
                 <option
                   value={locale.lang}
                 >{locale.lang}</option>
              ))
            }
          </select>
        </li>
      </ul>
    </header>
  );
});
