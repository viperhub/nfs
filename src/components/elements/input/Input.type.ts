export type InputSize = 'small' | 'medium' | 'large';

export type InputVariant = 'outlined' | 'filled';

export type InputAdornmentType = {
    icon: string;
    position: 'start' | 'end';
    onClick?: () => unknown;
    class?: string;
};

export type InputAdornment = InputAdornmentType;

export type SelectAdornment = Omit<InputAdornmentType, 'position'>;
