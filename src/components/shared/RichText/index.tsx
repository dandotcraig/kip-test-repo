import React from "react";
import { documentToReactComponents, Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

const renderOptions = {
  renderNode: {
  
    [BLOCKS.EMBEDDED_ENTRY]: (node:any, children:any) => {
      // target the contentType of the EMBEDDED_ENTRY to display as you need
      if (node.data.target.sys.contentType.sys.id === "codeBlock") {
        return (
          <pre>
            <code>{node.data.target.fields.code}</code>
          </pre>
        );
      }

      if (node.data.target.fields.file.contentType === "video/mp4") {
        return <iframe src={node.data.target.fields.file?.url} height="350" width="100%" frameBorder="0" scrolling="no" title={node.data.target.fields.title} allowFullScreen={true} />;
      }
    },

    [BLOCKS.EMBEDDED_ASSET]: (node:any, children:any) => {
      if (node.data?.target?.fields?.file?.contentType === "video/mp4") {
        return <iframe src={node.data.target.fields.file?.url} height="350px" width="100%" frameBorder="0" scrolling="no" title={node.data.target.fields.title} allowFullScreen={true} />;
      }
      
      // render the EMBEDDED_ASSET as you need
      else
        return (
          <img
            src={`https://${node.data?.target?.fields?.file?.url}`}
            height={node.data?.target?.fields?.file?.details?.image?.height}
            width={node.data?.target?.fields?.file?.details?.image?.width}
            alt={node.data?.target?.fields?.description}
          />
        );

    },
    [BLOCKS.UL_LIST]: (node:any, children:any) => (
      <ul style={{ listStyleType: 'disc' }}>{children}</ul>
    ),
  },
};
export default function RichText({ richText, options }:any) {
  return <>{documentToReactComponents(richText, options && renderOptions)}</>;
}