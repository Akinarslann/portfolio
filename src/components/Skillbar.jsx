const SkillBar = ({ skill, level, description }) => (
  <li className="flex flex-col items-center md:items-start gap-1">
    <p>{skill}</p>
    <div className="relative group bg-neutral-300 dark:bg-neutral-400 w-full max-w-80 h-3 rounded-full cursor-help">
      <div className={"bg-blue-500 dark:bg-gray-500 h-3 rounded-full"} style={{ width: `${level}%` }}></div>
      <span className="absolute bg-neutral-900 dark:bg-white translate-x-1/7 mt-2 z-40 w-full hidden
               group-hover:block text-neutral-300 dark:text-neutral-600 text-xs p-2 rounded">
        {description}
      </span>
    </div>
  </li>
)
export default SkillBar;