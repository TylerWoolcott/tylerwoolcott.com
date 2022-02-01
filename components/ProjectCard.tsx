import cn from 'classnames';

export default function ProjectCard({ title, subtitle, gradient, href, img, target, rel }: {title:any, subtitle:any, gradient:any, href:any, img:any, target:any, rel:any}) {
    return (
            <a href={href} target={target} rel={rel}
                className={cn(
                    'transform hover:scale-[1.01] transition-all cursor-pointer',
                    'rounded-xl w-full bg-gradient-to-r p-1',
                    gradient
                )}
            >
                <div className="flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-3">
                    <div className="mb-4">
                        {img}
                    </div>
                    <h4 className="text-lg md:text-lg font-medium mb-6 sm:mb-4 w-full text-gray-900 dark:text-gray-100 tracking-tight">
                        {title}
                    </h4>
                    <p className="text-base md:text-base font-regular mb-6 sm:mb-2 w-full text-gray-600 dark:text-gray-400 tracking-tight">
                        {subtitle}
                    </p>
                </div>
            </a>
    )
}