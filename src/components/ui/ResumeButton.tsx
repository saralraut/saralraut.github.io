import { Download } from 'lucide-react'
import { profile } from '../../data/profile'
import { assetUrl } from '../../lib/assetUrl'
import Button, { type ButtonSize, type ButtonVariant } from './Button'

interface ResumeButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}

// The resume download appears in the navbar (twice: desktop and mobile), the
// hero and the contact section. Keeping it in ONE component means the file
// path, saved file name and label can never drift apart: swap the PDF in
// /public (keep the name resume.pdf) and every button updates.
export default function ResumeButton(props: ResumeButtonProps) {
  return (
    <Button href={assetUrl(profile.resumePath)} download={profile.resumeDownloadName} {...props}>
      <Download className="h-4 w-4" aria-hidden="true" />
      Download Resume
    </Button>
  )
}
