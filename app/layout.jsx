import './globals.css'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {}
      <head />
/*Fehler war es muss im body stehen */
      <body>
       <nav>
        <h1>logo</h1>
          <ul>
            <li>
              <a href="#">Michi_ueber</a>
              </li>
              <li>
                <a href="#">Sign up</a>
                </li>
              </ul>
      </nav>
      {children}
      </body>
    </html>
  )
}
