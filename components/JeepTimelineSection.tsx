import { Clock, Sun, Coffee, Camera, ChevronRight, Backpack } from 'lucide-react'
import { JEEP_PACKAGES_TIME } from '../constants'

const JeepTimelineSection = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="relative bg-gradient-to-br from-white to-orange-50/30 p-6 md:p-8 rounded-3xl shadow-xl overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h5 className="font-black text-zinc-800 uppercase tracking-widest text-sm flex items-center gap-3">
            <div className="bg-orange-500 p-2 rounded-xl shadow-lg shadow-orange-500/30">
              <Clock className="w-4 h-4 text-white" />
            </div>
            <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              Jeep Tour Timeline
            </span>
          </h5>

          <div className="flex items-center gap-1 text-xs text-zinc-500 bg-orange-100/60 px-3 py-1.5 rounded-full">
            <Sun className="w-3.5 h-3.5 text-orange-500" />
            <span>Jeep Activity</span>
          </div>
        </div>

        {/* Packages */}
        <div className="space-y-12">
          {JEEP_PACKAGES_TIME.map((pkg) => (
            <div key={pkg.id}>
              {/* Package title */}
              <div className="mb-6">
                <h3 className="text-lg md:text-xl font-black text-zinc-800 uppercase">
                  {pkg.title}
                </h3>
                <p className="text-sm text-orange-500 font-semibold mt-1">
                  {pkg.subtitle}
                </p>
              </div>

              {/* Timeline */}
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-[140px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-orange-300 via-orange-400 to-orange-300 rounded-full opacity-30"></div>

                <div className="space-y-3">
                  {pkg.timeline.map((item, idx) => (
                    <div
                      key={idx}
                      className="group flex items-center gap-4 p-3 rounded-xl hover:bg-orange-50/50 transition-all"
                    >
                      {/* Time + Icon */}
                      <div className="flex items-center gap-2 w-[120px] shrink-0">
                        <span className="text-xl leading-none">{item.icon}</span>
                        <span className="font-mono font-bold text-sm bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                          {item.time}
                        </span>
                      </div>

                      {/* Dot */}
                      <div className="relative flex items-center justify-center w-4 shrink-0">
                        <div className="w-2 h-2 bg-orange-400 rounded-full group-hover:scale-150 transition-all"></div>
                        <div className="absolute w-2 h-2 bg-orange-400 rounded-full animate-ping opacity-20"></div>
                      </div>

                      {/* Text */}
                      <div className="flex-1 text-zinc-700 text-sm font-medium leading-relaxed group-hover:text-zinc-900">
                        {item.text}
                      </div>

                      {/* Arrow */}
                      <ChevronRight className="w-4 h-4 text-orange-300 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Things to Prepare */}
        <div className="mt-14 bg-orange-50/70 border border-orange-100 rounded-3xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="bg-orange-500 p-2 rounded-xl shadow-lg shadow-orange-500/30">
              <Backpack className="w-4 h-4 text-white" />
            </div>
            <h6 className="font-black text-zinc-800 uppercase tracking-widest text-sm">
              Things to Prepare for Jeep Tour 🌄💚
            </h6>
          </div>

          <ul className="grid sm:grid-cols-2 gap-3 text-sm text-zinc-700">
            <li className="flex items-start gap-2"><span className="text-orange-500">✔</span> Warm jacket</li>
            <li className="flex items-start gap-2"><span className="text-orange-500">✔</span> Hat / beanie</li>
            <li className="flex items-start gap-2"><span className="text-orange-500">✔</span> Mineral water (1 bottle)</li>
            <li className="flex items-start gap-2"><span className="text-orange-500">✔</span> Sunscreen</li>
            <li className="flex items-start gap-2"><span className="text-orange-500">✔</span> Glasses</li>
            <li className="flex items-start gap-2"><span className="text-orange-500">✔</span> Camera / phone</li>
            <li className="flex items-start gap-2 sm:col-span-2">
              <span className="text-orange-500">✔</span>
              Enough rest (2–3 hours sleep)
            </li>
          </ul>

          <p className="mt-4 text-xs text-zinc-500 italic">
            A camera is a tool to capture memories 📸
          </p>
        </div>

        {/* Decorative blur */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-300/10 rounded-full blur-3xl -z-10"></div>
      </div>
    </section>
  )
}

export default JeepTimelineSection
