import { Tooltip, Button } from '@strapi/design-system';
import { useIntl } from 'react-intl';
import { ThemeColorEntry } from '../../../shared/types';

interface ColorPickerPopoverProps {
  colors: ThemeColorEntry[];
  activeColor: string | undefined;
  onSelect: (color: string) => void;
  onRemove: () => void;
}

export function ColorPickerPopover({
  colors,
  activeColor,
  onSelect,
  onRemove,
}: ColorPickerPopoverProps) {
  const { formatMessage } = useIntl();

  return (
    <div style={{ padding: 8, maxHeight: 400, overflowY: 'auto' }}>
      <Button
        variant="tertiary"
        size="S"
        onClick={onRemove}
        style={{ marginTop: 8, width: '100%' }}
      >
        {formatMessage({
          id: 'tiptap-editor.color.remove',
          defaultMessage: 'Remove color',
        })}
      </Button>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(11, 24px)',
          gap: 4,
        }}
      >
        {colors.map((entry) => (
          <Tooltip key={entry.color} description={entry.label}>
            <button
              type="button"
              aria-label={entry.label}
              onClick={() => onSelect(entry.color)}
              style={{
                width: 24,
                height: 24,
                backgroundColor: entry.color,
                border: 'none',
                borderRadius: 4,
                cursor: 'pointer',
                padding: 0,
                ...(activeColor === entry.color
                  ? { outline: '2px solid #4945ff', outlineOffset: '2px' }
                  : {}),
              }}
            />
          </Tooltip>
        ))}
      </div>
      <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
        <input
          type="color"
          value={activeColor?.startsWith('#') ? activeColor : '#000000'}
          onChange={(e) => onSelect(e.target.value)}
          style={{ width: 24, height: 24, padding: 0, border: 'none', cursor: 'pointer' }}
          aria-label={formatMessage({
            id: 'tiptap-editor.color.custom',
            defaultMessage: 'Custom color',
          })}
        />
        <span style={{ fontSize: 12 }}>
          {formatMessage({
            id: 'tiptap-editor.color.custom',
            defaultMessage: 'Custom color',
          })}
        </span>
      </div>
    </div>
  );
}
