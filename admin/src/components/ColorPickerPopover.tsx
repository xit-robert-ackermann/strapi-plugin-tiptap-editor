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

  const customLabel = formatMessage({
    id: 'tiptap-editor.color.custom',
    defaultMessage: 'Custom color',
  });

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
          marginTop: 8,
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
        <Tooltip description={customLabel}>
          <div
            style={{
              position: 'relative',
              width: 24,
              height: 24,
              borderRadius: 4,
              cursor: 'pointer',
              background: 'conic-gradient(red, yellow, lime, aqua, blue, magenta, red)',
              flexShrink: 0,
            }}
          >
            <input
              type="color"
              value={activeColor?.startsWith('#') ? activeColor : '#000000'}
              aria-label={customLabel}
              onChange={(e) => onSelect(e.target.value)}
              style={{
                position: 'absolute',
                inset: 0,
                opacity: 0,
                width: '100%',
                height: '100%',
                cursor: 'pointer',
                padding: 0,
                border: 'none',
              }}
            />
          </div>
        </Tooltip>
      </div>
    </div>
  );
}
