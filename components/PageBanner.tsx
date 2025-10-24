import Image from 'next/image'

interface PageBannerProps {
  title: string
  subtitle?: string
  image: string
  imageAlt?: string
}

export default function PageBanner({
  title,
  subtitle,
  image,
  imageAlt = title
}: PageBannerProps) {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
