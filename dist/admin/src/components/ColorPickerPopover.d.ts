import { ThemeColorEntry } from '../../../shared/types';
interface ColorPickerPopoverProps {
    colors: ThemeColorEntry[];
    activeColor: string | undefined;
    onSelect: (color: string) => void;
    onRemove: () => void;
    showColorPicker?: boolean;
    onColorInputChange: (color: string) => void;
}
export declare function ColorPickerPopover({ colors, activeColor, onSelect, onRemove, showColorPicker, onColorInputChange, }: ColorPickerPopoverProps): import("react/jsx-runtime").JSX.Element;
export {};
