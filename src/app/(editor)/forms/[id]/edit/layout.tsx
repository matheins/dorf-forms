import { SiteFooter } from "@/components/site-footer"

interface EditorProps {
  children?: React.ReactNode
}

export default function EditorLayout({ children }: EditorProps) {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <div className="container mx-auto grid flex-1 items-start gap-10 py-8">
        {children}
      </div>
      <SiteFooter className="border-t" />
    </div>
  )
}
