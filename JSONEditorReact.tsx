import { useEffect, useRef } from 'react';
import { createJSONEditor, JSONEditorPropsOptional } from 'vanilla-jsoneditor';


/**
 * React wrapper for vanilla-jsoneditor with support for custom toolbar (onRenderMenu prop).
 * Pass onRenderMenu to fully customize or replace the editor's toolbar.
 */
const JSONEditorReact: React.FC<JSONEditorPropsOptional & { onRenderMenu?: any }> = (props) => {
  const refContainer = useRef<HTMLDivElement>(null);
  const refEditor = useRef<any>(null);

  useEffect(() => {
    refEditor.current = createJSONEditor({
      target: refContainer.current!,
      props: props // Pass all props including onRenderMenu
    });
    return () => {
      if (refEditor.current) {
        refEditor.current.destroy();
        refEditor.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (refEditor.current) {
      refEditor.current.updateProps(props);
    }
  }, [props]);

  return <div ref={refContainer} style={{ width: '100%', height: '100%', minHeight: 200 }} />;
};

export default JSONEditorReact;
