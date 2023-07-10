'use client'

import Document from "./pages/_document"
import { globalStyles } from "./styles/global"

globalStyles()
Document()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
