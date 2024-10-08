/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { themes } from "prism-react-renderer"

export default {
  ...themes.github,
  styles: [
    ...themes.github.styles,
    {
      types: ["title"],
      style: {
        color: "#0550AE",
        fontWeight: "bold",
      },
    },
    {
      types: ["parameter"],
      style: {
        color: "#953800",
      },
    },
    {
      types: ["boolean", "rule", "color", "number", "constant", "property"],
      style: {
        color: "#005CC5",
      },
    },
    {
      types: ["atrule", "tag"],
      style: {
        color: "#22863A",
      },
    },
    {
      types: ["script"],
      style: {
        color: "#24292E",
      },
    },
    {
      types: ["operator", "unit", "rule"],
      style: {
        color: "#D73A49",
      },
    },
    {
      types: ["font-matter", "string", "attr-value"],
      style: {
        color: "#C6105F",
      },
    },
    {
      types: ["class-name"],
      style: {
        color: "#116329",
      },
    },
    {
      types: ["attr-name"],
      style: {
        color: "#0550AE",
      },
    },
    {
      types: ["keyword"],
      style: {
        color: "#CF222E",
      },
    },
    {
      types: ["function"],
      style: {
        color: "#8250DF",
      },
    },
    {
      types: ["selector"],
      style: {
        color: "#6F42C1",
      },
    },
    {
      types: ["variable"],
      style: {
        color: "#E36209",
      },
    },
    {
      types: ["comment"],
      style: {
        color: "#6B6B6B",
      },
    },
    {
      languages: ["keto-relation-tuples", "keto-relationships"],
      types: ["namespace"],
      style: {
        color: "#666",
      },
    },
    {
      languages: ["keto-relation-tuples"],
      types: ["object"],
      style: {
        color: "#939",
      },
    },
    {
      languages: ["keto-relation-tuples", "keto-relationships"],
      types: ["relation"],
      style: {
        color: "#e80",
      },
    },
    {
      languages: ["keto-relation-tuples", "keto-relationships"],
      types: ["delimiter"],
      style: {
        color: "#555",
      },
    },
    {
      languages: ["keto-relation-tuples"],
      types: ["subject"],
      style: {
        color: "#903",
      },
    },
    {
      languages: ["keto-relationships"],
      types: ["id"],
      style: {
        color: "#939",
      },
    },
  ],
}
