import { cn } from "@/lib/utils"



export interface TestimonialCardProps {
  author: string,
handle:string,
image:string,
  text: string
  href?: string
  className?: string
}

export function TestimonialCard({ 
  author,
  handle,
  text,
  href,
  image,
  className
}: TestimonialCardProps) {
  const Card = href ? 'a' : 'div'
  
  return (
    <Card
      {...(href ? { href } : {})}
      className={cn(
        "flex flex-col rounded-lg border-t",
        "bg-gradient-to-b from-muted/50 to-muted/10",
        "p-4 text-start sm:p-6",
        "hover:from-muted/60 hover:to-muted/20",
        "max-w-[320px] sm:max-w-[320px]",
        "transition-colors duration-300",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <img src={image} className="h-12 w-12 rounded-full object-cover self-center" alt="" />
        <div className="flex flex-col items-start">
          <h3 className="text-md font-semibold leading-none">
            {author}
          </h3>
          <p className="text-sm text-muted-foreground">
          {handle}
          </p>
        </div>
      </div>
      <p className="sm:text-md mt-4 text-sm text-muted-foreground">
       {text}
      </p>
    </Card>
  )
}
