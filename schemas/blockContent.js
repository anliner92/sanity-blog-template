import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

// For Custom Fonts
const fontSizeRender12 = (props) => {
  return <span style={{ fontSize: "12px" }}>{props.children}</span>;
};
const fontSizeRender13 = (props) => {
  return <span style={{ fontSize: "13px" }}>{props.children}</span>;
};
const fontSizeRender14 = (props) => {
  return <span style={{ fontSize: "14px" }}>{props.children}</span>;
};
const fontSizeRender15 = (props) => {
  return <span style={{ fontSize: "15px" }}>{props.children}</span>;
};
const fontSizeRender16 = (props) => {
  return <span style={{ fontSize: "16px" }}>{props.children}</span>;
};
const fontSizeRender17 = (props) => {
  return <span style={{ fontSize: "17px" }}>{props.children}</span>;
};
const fontSizeRender18 = (props) => {
  return <span style={{ fontSize: "18px" }}>{props.children}</span>;
};
const fontSizeRender19 = (props) => {
  return <span style={{ fontSize: "19px" }}>{props.children}</span>;
};
const fontSizeRender20 = (props) => {
  return <span style={{ fontSize: "20px" }}>{props.children}</span>;
};
const fontSizeRender21 = (props) => {
  return <span style={{ fontSize: "21px" }}>{props.children}</span>;
};
const fontSizeRender22 = (props) => {
  return <span style={{ fontSize: "22px" }}>{props.children}</span>;
};
const fontSizeRender23 = (props) => {
  return <span style={{ fontSize: "23px" }}>{props.children}</span>;
};
const fontSizeRender24 = (props) => {
  return <span style={{ fontSize: "24px" }}>{props.children}</span>;
};
const fontSizeRender25 = (props) => {
  return <span style={{ fontSize: "25px" }}>{props.children}</span>;
};
const fontSizeRender26 = (props) => {
  return <span style={{ fontSize: "26px" }}>{props.children}</span>;
};
const fontSizeRender27 = (props) => {
  return <span style={{ fontSize: "27px" }}>{props.children}</span>;
};
const fontSizeRender28 = (props) => {
  return <span style={{ fontSize: "28px" }}>{props.children}</span>;
};
const fontSizeRender29 = (props) => {
  return <span style={{ fontSize: "29px" }}>{props.children}</span>;
};
const fontSizeRender30 = (props) => {
  return <span style={{ fontSize: "30px" }}>{props.children}</span>;
};
const fontSizeRender31 = (props) => {
  return <span style={{ fontSize: "31px" }}>{props.children}</span>;
};
const fontSizeRender32 = (props) => {
  return <span style={{ fontSize: "32px" }}>{props.children}</span>;
};
const fontSizeRender33 = (props) => {
  return <span style={{ fontSize: "33px" }}>{props.children}</span>;
};
const fontSizeRender34 = (props) => {
  return <span style={{ fontSize: "34px" }}>{props.children}</span>;
};
const fontSizeRender35 = (props) => {
  return <span style={{ fontSize: "35px" }}>{props.children}</span>;
};
const fontSizeRender36 = (props) => {
  return <span style={{ fontSize: "36px" }}>{props.children}</span>;
};
const fontSizeRender37 = (props) => {
  return <span style={{ fontSize: "37px" }}>{props.children}</span>;
};
const fontSizeRender38 = (props) => {
  return <span style={{ fontSize: "38px" }}>{props.children}</span>;
};
const fontSizeRender39 = (props) => {
  return <span style={{ fontSize: "39px" }}>{props.children}</span>;
};
const fontSizeRender40 = (props) => {
  return <span style={{ fontSize: "40px" }}>{props.children}</span>;
};

// End of Custom Fonts

export default {
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      // Styles let you set what your user can mark up blocks with. These
      // corrensponds with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "H5", value: "h5" },
        { title: "H6", value: "h6" },
        { title: "Quote", value: "blockquote" },
        {
          title: "12",
          value: "12",
          blockEditor: {
            render: fontSizeRender12,
          },
        },
        {
          title: "13",
          value: "13",
          blockEditor: {
            render: fontSizeRender13,
          },
        },
        {
          title: "14",
          value: "14",
          blockEditor: {
            render: fontSizeRender14,
          },
        },
        {
          title: "15",
          value: "15",
          blockEditor: {
            render: fontSizeRender15,
          },
        },
        {
          title: "16",
          value: "16",
          blockEditor: {
            render: fontSizeRender16,
          },
        },
        {
          title: "17",
          value: "17",
          blockEditor: {
            render: fontSizeRender17,
          },
        },
        {
          title: "18",
          value: "18",
          blockEditor: {
            render: fontSizeRender18,
          },
        },
        {
          title: "19",
          value: "19",
          blockEditor: {
            render: fontSizeRender19,
          },
        },
        {
          title: "20",
          value: "20",
          blockEditor: {
            render: fontSizeRender20,
          },
        },
        {
          title: "21",
          value: "21",
          blockEditor: {
            render: fontSizeRender21,
          },
        },
        {
          title: "22",
          value: "22",
          blockEditor: {
            render: fontSizeRender22,
          },
        },
        {
          title: "23",
          value: "23",
          blockEditor: {
            render: fontSizeRender23,
          },
        },
        {
          title: "24",
          value: "24",
          blockEditor: {
            render: fontSizeRender24,
          },
        },
        {
          title: "25",
          value: "25",
          blockEditor: {
            render: fontSizeRender25,
          },
        },

        {
          title: "26",
          value: "26",
          blockEditor: {
            render: fontSizeRender26,
          },
        },
        {
          title: "27",
          value: "27",
          blockEditor: {
            render: fontSizeRender27,
          },
        },
        {
          title: "28",
          value: "28",
          blockEditor: {
            render: fontSizeRender28,
          },
        },
        {
          title: "29",
          value: "29",
          blockEditor: {
            render: fontSizeRender29,
          },
        },
        {
          title: "30",
          value: "30",
          blockEditor: {
            render: fontSizeRender30,
          },
        },
        {
          title: "31",
          value: "31",
          blockEditor: {
            render: fontSizeRender31,
          },
        },
        {
          title: "32",
          value: "32",
          blockEditor: {
            render: fontSizeRender32,
          },
        },
        {
          title: "33",
          value: "33",
          blockEditor: {
            render: fontSizeRender33,
          },
        },
        {
          title: "34",
          value: "34",
          blockEditor: {
            render: fontSizeRender34,
          },
        },
        {
          title: "35",
          value: "35",
          blockEditor: {
            render: fontSizeRender35,
          },
        },
        {
          title: "36",
          value: "36",
          blockEditor: {
            render: fontSizeRender36,
          },
        },
        {
          title: "37",
          value: "37",
          blockEditor: {
            render: fontSizeRender37,
          },
        },

        {
          title: "38",
          value: "38",
          blockEditor: {
            render: fontSizeRender38,
          },
        },
        {
          title: "39",
          value: "39",
          blockEditor: {
            render: fontSizeRender39,
          },
        },
        {
          title: "40",
          value: "40",
          blockEditor: {
            render: fontSizeRender40,
          },
        },
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: "External Link",
            name: "link",
            type: "object",
            blockEditor: {
              icon: FaExternalLinkAlt,
            },
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
                validation: (Rule) =>
                  Rule.uri({
                    allowRelative: true,
                    scheme: ["https", "http", "mailto", "tel"],
                  }),
              },
              {
                title: "Open in new tab",
                name: "blank",
                description: "Read https://css-tricks.com/use-target_blank/",
                type: "boolean",
              },
            ],
          },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    // {
    //   type: "figure",
    // },
    // {
    //   type: "slideshow",
    // },
    {
      type: "image",
    },
  ],
};
