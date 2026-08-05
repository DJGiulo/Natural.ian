export function Container({ as: Tag = 'div', children, className = '' }) {
  return <Tag className={`container ${className}`.trim()}>{children}</Tag>
}
