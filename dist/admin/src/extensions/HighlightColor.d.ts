import { Editor } from '@tiptap/core';
import { TiptapPresetConfig } from '../../../shared/types';
export declare function useHighlightColor(editor: Editor | null, props?: {
    disabled?: boolean;
    config?: TiptapPresetConfig['highlightColor'];
}): {
    highlightColorButton: import("react/jsx-runtime").JSX.Element;
};
