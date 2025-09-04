const ContactLinks = ({ icon: Icon, title, link, description }) => (
  <li className="flex flex-row gap-4 items-center w-full">
    <Icon className="text-blue-500 dark:text-gray-500 scale-160" />
    <div className="flex flex-col gap-0.5">
        <p className="h4-title">{title}</p>
        <a href={link} target="_blank">{description}</a>
    </div>
  </li>
)
export default ContactLinks;