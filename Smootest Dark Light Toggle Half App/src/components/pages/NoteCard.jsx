import { FaTags } from "react-icons/fa6";
import { MdCreate, MdDelete, MdOutlinePushPin } from "react-icons/md";
import { format } from "date-fns";
import { useThemeColors } from "../../colors";

function NoteCardUI({ title, date, content, tags }) {
  const {
    pinTheme,
    pinTheme2,
    bgColor,
    tagColor,
    dateColor,
    lightborderClass,
    greyBlackText,
  } = useThemeColors(); //importing color for dark n light theme

  const formattedDate = format(date, "MMM dd, yyyy");

  return (
    <div
      className={`border lg:max-w-80 p-3 w-full  ${lightborderClass} rounded-md hover:shadow-xl transition-all ease-in-out  ${tagColor} `}
    >
      <div
        className={`flex items-center w-full  justify-between  ${greyBlackText}  `}
      >
        <div className="p-1">
          <p className={`font-semibold  `}>{title}</p>
          <p className={`text-sm pt-2 font-semibold `}>{formattedDate}</p>
        </div>
        <div>
          <MdOutlinePushPin
            size={19}
            className={`hover:text-blue-500 ${pinTheme2}`}
          />
        </div>
      </div>

      <div className="p-1 text-sm mt-2">
        <p>{content}</p>
        <div className={`pt-3 text-xs flex justify-between  `}>
          <div>
            <span className="mr-2">
              {/* <FaTags size={12} className="inline mr-1" /> */}
              {tags && tags.length > 0 ? (
                <>
                  {tags.slice(0, 5).map((tag, index) => (
                    <span key={index} className="mr-2">
                      <FaTags size={12} className="inline mr-1" />
                      {tag}
                    </span>
                  ))}
                  {tags.length > 5 && <span className="mr-2">... </span>}{" "}
                </>
              ) : (
                "No tags"
              )}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MdCreate
              className="icon-btn text-green-600 cursor-pointer"
              size={16}
            />
            <MdDelete
              className="icon-btn text-red-500 cursor-pointer"
              size={16}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteCardUI;
