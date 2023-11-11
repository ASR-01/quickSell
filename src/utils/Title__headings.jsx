import { CgProfile } from "react-icons/cg";
import { AiOutlinePlus } from "react-icons/ai";
import { PiCircleHalfFill } from "react-icons/pi";
import { TbAlertHexagon } from "react-icons/tb";
import {
  BsBarChart,
  BsCircle,
  BsFillExclamationSquareFill,
  BsThreeDots,
} from "react-icons/bs";

export const getGroupHeading = (group, grouping, users) => {
  if (grouping === "user") {
    const user = users.find((user) => user.id === group);
    if (user) {
      const userIdWithoutPrefix = user.id.substring(4);
      return (
        <div className="main__heading__userName__title">
          <div className="main__heading__userName__title__item__1">
            <CgProfile />
            {user.name}
            <p>{userIdWithoutPrefix}</p>
          </div>
          <div className="main__heading__userName__title__item__2">
            <AiOutlinePlus />
            <p
              style={{
                marginBottom: "10px",
              }}
            >
              ...
            </p>
          </div>
        </div>
      );
    } else {
      return "No User";
    }
  } else if (grouping === "status") {
    const status =
      group === "Todo" ? (
        <>
          <BsCircle />
          Todo
        </>
      ) : group === "In progress" ? (
        <>
          <PiCircleHalfFill color="orange" />
          In Progress
        </>
      ) : group === "Backlog" ? (
        <>
          <TbAlertHexagon color="black" />
          Backlog
        </>
      ) : (
        ""
      );

    return (
      <div className="main__heading__userName__title">
        <div className="main__heading__userName__title__item__1">
          {status}
        </div>
        <div className="main__heading__userName__title__item__2">
          <AiOutlinePlus />
          <p
            style={{
              marginBottom: "10px",
            }}
          >
            ...
          </p>
        </div>
      </div>
    );
  } else if (grouping === "priority") {
    const priority =
      group === "1" ? (
        <>
          <BsFillExclamationSquareFill color="orange" />
          Urgent
        </>
      ) : group === "2" ? (
        <>
          <BsBarChart color="red" />
          Low
        </>
      ) : group === "3" ? (
        <>
          <BsBarChart color="blue" />
          High
        </>
      ) : group === "4" ? (
        <>
          <BsBarChart color="#f542e6" />
          Medium
        </>
      ) : (
        <>
          <BsThreeDots color="#42f5e6" />
          No Priority
        </>
      );

    return (
      <div className="main__heading__userName__title">
        <div className="main__heading__userName__title__item__1">
          {priority}
        </div>
        <div className="main__heading__userName__title__item__2">
          <AiOutlinePlus />
          <p
            style={{
              marginBottom: "10px",
            }}
          >
            ...
          </p>
        </div>
      </div>
    );
  } else {
    return group;
  }
};
