import React from "react";

const PlanItem = (props) => {
    const { name } = props;
    return (
        <>
            <div className="card py-2 text-center">
                <div className="card-body">
                    <h5>{name}</h5>
                </div>
                {/* <ul className="list-group list-group-flush">
          {ingredientLines.map((ingredient) => (
            <li className="list-group-item">{ingredient}</li>
          ))}
        </ul> */}
            </div>
        </>
    );
};

export default PlanItem;