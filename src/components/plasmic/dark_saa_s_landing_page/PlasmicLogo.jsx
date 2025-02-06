// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3bppekKz3g8uzqqJ2xtrKs
// Component: TOPTvoruoC_N
import * as React from "react";
import {
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: 3bppekKz3g8uzqqJ2xtrKs/projectcss
import sty from "./PlasmicLogo.module.css"; // plasmic-import: TOPTvoruoC_N/css
import logoPngHfde7D1US8A from "./images/logoPng.png"; // plasmic-import: Hfde7D1U_s8a/picture
import lineBranchPngIHe0AHNv4X from "./images/lineBranchPng.png"; // plasmic-import: i_He_0aHNv4x/picture

createPlasmicElementProxy;

export const PlasmicLogo__VariantProps = new Array("_50Opaque", "smallLogo");

export const PlasmicLogo__ArgProps = new Array();

const $$ = {};

function PlasmicLogo__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "_50Opaque",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props._50Opaque
      },
      {
        path: "smallLogo",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.smallLogo
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  return (
    <PlasmicLink__
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        { [sty.root_50Opaque]: hasVariant($state, "_50Opaque", "_50Opaque") }
      )}
      href={`/`}
      platform={"react"}
    >
      <PlasmicImg__
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(sty.img, {
          [sty.img_50Opaque]: hasVariant($state, "_50Opaque", "_50Opaque"),
          [sty.imgsmallLogo]: hasVariant($state, "smallLogo", "smallLogo")
        })}
        displayHeight={"100%"}
        displayMaxHeight={"none"}
        displayMaxWidth={
          hasVariant($state, "smallLogo", "smallLogo") ? "50px" : "none"
        }
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={"100%"}
        src={
          hasVariant($state, "smallLogo", "smallLogo")
            ? {
                src: lineBranchPngIHe0AHNv4X,
                fullWidth: 100,
                fullHeight: 100,
                aspectRatio: undefined
              }
            : {
                src: logoPngHfde7D1US8A,
                fullWidth: 224,
                fullHeight: 50,
                aspectRatio: undefined
              }
        }
      />
    </PlasmicLink__>
  );
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicLogo__ArgProps,
          internalVariantPropNames: PlasmicLogo__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLogo__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLogo";
  } else {
    func.displayName = `PlasmicLogo.${nodeName}`;
  }
  return func;
}

export const PlasmicLogo = Object.assign(
  // Top-level PlasmicLogo renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicLogo
    internalVariantProps: PlasmicLogo__VariantProps,
    internalArgProps: PlasmicLogo__ArgProps
  }
);

export default PlasmicLogo;
/* prettier-ignore-end */
