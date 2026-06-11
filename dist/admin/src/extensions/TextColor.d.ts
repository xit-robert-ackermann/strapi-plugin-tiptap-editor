import { Editor } from '@tiptap/core';
import { TiptapPresetConfig } from '../../../shared/types';
export declare function useTextColor(editor: Editor | null, props?: {
    disabled?: boolean;
    config?: TiptapPresetConfig['textColor'];
}): {
    textColorButton: import("react/jsx-runtime").JSX.Element;
};
