export default function Banner({ children }) {
  // J'utilise la props children pour avoir un titre modifiable dans l'élément parent.
  return <div>{children}</div>
}
