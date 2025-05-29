import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Frontend Garden",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "goatcounter",
      websiteId: "seasle",
    },
    locale: "ru-RU",
    baseUrl: "seasle.ru",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter",
        body: "Inter",
        code: "Cascadia Code",
      },
      colors: {
        lightMode: {
          light: "hsla(35, 36%, 96%, 1)", // background-primary
          lightgray: "hsla(34, 34%, 90%, 1)", // background-secondary
          gray: "hsla(37, 38%, 83%, 1)", // color-l-gray-60
          darkgray: "hsla(31, 45%, 24%, 1)", // text-normal
          dark: "hsla(33, 54%, 17%, 1)", // text-heading
          secondary: "hsla(149, 50%, 39%, 1)", // link-external-color
          tertiary: "hsla(148, 48%, 47%, 1)", // link-external-color-hover
          highlight: "hsla(186, 64%, 46%, 0.2)", // color-l-alpha-blue
          textHighlight: "hsla(44, 100%, 50%, 0.2)", // color-l-alpha-yellow
        },
        darkMode: {
          light: "hsla(30, 19%, 15%, 1)", // background-primary
          lightgray: "hsla(29, 16%, 13%, 1)", // background-secondary
          gray: "hsla(33, 27%, 33%, 1)", // color-d-gray-60
          darkgray: "hsla(34, 39%, 74%, 1)", // text-normal
          dark: "hsla(32, 48%, 85%, 1)", // text-heading
          secondary: "hsla(154, 57%, 42%, 1)", // link-external-color
          tertiary: "hsla(152, 51%, 54%, 1)", // link-external-color-hover
          highlight: "hsla(186, 64%, 46%, 0.2)", // color-d-alpha-blue
          textHighlight: "hsla(44, 100%, 50%, 0.2)", // color-d-alpha-yellow
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
