import { Clock, Sun, Coffee, Camera, ChevronRight, Backpack } from 'lucide-react'

/* =====================
   TIMELINE DATA
===================== */
const TREKKING_TIMELINE = [
  { time: '02.00 – 03.00', text: 'Pick up at hotel (depending on your location)', icon: '🚗' },
  { time: '04.00', text: 'Start trekking to Mount Batur', icon: '🥾' },
  { time: '05.30', text: 'Arrive at the summit of Mount Batur', icon: '⛰️' },
  { time: '06.00', text: 'Breakfast at the peak & sunrise moment', icon: '🌅' },
  { time: '07.00', text: 'Relax and enjoy the panoramic view', icon: '✨' },
  { time: '07.30', text: 'Start descending to the starting point', icon: '⬇️' },
  { time: '08.20', text: 'Finish trekking', icon: '🏁' },
  { time: '08.30', text: 'Return to hotel', icon: '🏨' },
  { time: '10.00 – 11.00', text: 'Arrive at hotel', icon: '✅' },
]

/* =====================
   PREPARE DATA
===================== */
const TREKKING_PREPARE = [
  'Prepare your body for at least 2–3 hours of sleep',
  'Climbing shoes / sports shoes / running shoes',
  'Bag according to the needs you carry',
  'Body warmer jacket',
  'Head warmer hat',
  'Sunscreen',
  'Glasses',
  'Camera to immortalize memories',
]

const TrekkingTimeline = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="relative bg-gradient-to-br from-white to-orange-50/30 p-6 md:p-8 rounded-3xl shadow-xl overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h5 className="font-black text-zinc-800 uppercase tracking-widest text-sm flex items-center gap-3">
            <div className="bg-orange-500 p-2 rounded-xl shadow-lg shadow-orange-500/30">
              <Clock className="w-4 h-4 text-white" />
            </div>
            <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              Journey Timeline
            </span>
          </h5>

          <div className="flex items-center gap-1 text-xs text-zinc-500 bg-orange-100/60 px-3 py-1.5 rounded-full">
            <Sun className="w-3.5 h-3.5 text-orange-500" />
            <span>{TREKKING_TIMELINE.length} Activities</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[140px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-orange-300 via-orange-400 to-orange-300 rounded-full opacity-30"></div>

          <div className="space-y-3">
            {TREKKING_TIMELINE.map((item, idx) => (
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

        {/* Footer Notes */}
        <div className="mt-6 pt-4 border-t border-orange-100/60 flex flex-wrap gap-4 justify-between text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <Coffee className="w-3.5 h-3.5 text-orange-400" />
            <span>Breakfast included at the summit</span>
          </div>
          <div className="flex items-center gap-2">
            <Camera className="w-3.5 h-3.5 text-orange-400" />
            <span>Photo stops available</span>
          </div>
        </div>

        {/* Prepare Section */}
        <div className="mt-10 bg-orange-50/70 border border-orange-100 rounded-3xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="bg-orange-500 p-2 rounded-xl shadow-lg shadow-orange-500/30">
              <Backpack className="w-4 h-4 text-white" />
            </div>
            <h6 className="font-black text-zinc-800 uppercase tracking-widest text-sm">
              Things to Prepare for Trekking 🌄💚
            </h6>
          </div>

          <ul className="grid sm:grid-cols-2 gap-3 text-sm text-zinc-700">
            {TREKKING_PREPARE.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-orange-500 mt-0.5">✔</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-4 text-xs text-zinc-500 italic">
            Camera is a tool to immortalize memories 📸
          </p>
        </div>

        {/* Decorative Blur */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-300/10 rounded-full blur-3xl -z-10"></div>
      </div>
    </section>
  )
}

export default TrekkingTimeline
