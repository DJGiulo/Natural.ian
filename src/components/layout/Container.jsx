export function Container({ as: Tag = 'div', children, className = '' }) {
  return <Tag className={`app-container ${className}`.trim()}>{children}</Tag>
}
