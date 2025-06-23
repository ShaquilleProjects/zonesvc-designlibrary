import { useTheme } from '../../theme-provider/src/index';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export function Button({
  variant = 'primary',
  size = 'medium',
  loading = false,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const theme = useTheme();

  const classNames = [
    'button',
    `button--${variant}`,
    size !== 'medium' && `button--${size}`,
    loading && 'button--loading',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      className={classNames}
      disabled={props.disabled || loading}
      {...props}
    >
      {children}
      {loading && (
        <span className="button--loading" />
      )}
    </button>
  );
}
