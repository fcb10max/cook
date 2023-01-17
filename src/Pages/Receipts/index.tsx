import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReceiptCard from "../../Components/ReceiptCard";
import {
  ReciptsC,
  ReceiptsWrapper,
  ReceiptsFilter,
  ReceiptsGrid,
  ReceiptsFilterItem,
} from "./styles";
import meatImg from "../../Assets/img/meat.webp";
import meatImgGrayscale from "../../Assets/img/meat_grayscale.webp";
import veganImg from "../../Assets/img/vegan.webp";
import veganImgGrayscale from "../../Assets/img/vegan_grayscale.webp";
import allMeals from "../../Assets/img/all_meals.webp";
import allMealsGrayscale from "../../Assets/img/all_meals_grayscale.webp";
import { IReceipt } from "../../App";

interface IReceiptsComponentProps {
  receipts: IReceipt[];
}

const Receipts: React.FC<IReceiptsComponentProps> = ({ receipts }) => {
  const [mealFilter, setMealFilter] = useState("all");
  const [meals, setMeals] = useState(receipts);
  const filterTypes = {
    all: "all",
    meat: "meat",
    vegan: "vegan",
  } as const;

  type Keys = keyof typeof filterTypes;
  type Values = typeof filterTypes[Keys];

  const filterChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: Values = e.target.value as Values;
    setMealFilter(filterTypes[value]);
  };

  useEffect(() => {
    switch (mealFilter) {
      case filterTypes.all:
        setMeals(receipts);
        break;
      case filterTypes.meat:
        setMeals(receipts.filter((i) => i.notVegan));
        break;
      case filterTypes.vegan:
        setMeals(receipts.filter((i) => !i.notVegan));
        break;
      default:
        throw new ReferenceError("Invalid filter value");
    }
  }, [mealFilter]);

  return (
    <ReciptsC>
      <ReceiptsWrapper>
        <ReceiptsFilter>
          <ReceiptsFilterItem active={mealFilter === filterTypes.all}>
            <input
              onChange={filterChangeHandler}
              type="radio"
              name="receiptsFilter"
              value={filterTypes.all}
            />
            <img
              src={
                mealFilter === filterTypes.all ? allMeals : allMealsGrayscale
              }
              alt="all_meals"
            />
            All
          </ReceiptsFilterItem>
          <ReceiptsFilterItem active={mealFilter === filterTypes.meat}>
            <input
              onChange={filterChangeHandler}
              type="radio"
              name="receiptsFilter"
              value={filterTypes.meat}
            />
            <img
              src={mealFilter === filterTypes.meat ? meatImg : meatImgGrayscale}
              alt="meat"
            />
            Meat lover
          </ReceiptsFilterItem>
          <ReceiptsFilterItem active={mealFilter === filterTypes.vegan}>
            <input
              onChange={filterChangeHandler}
              type="radio"
              name="receiptsFilter"
              value={filterTypes.vegan}
            />
            <img
              src={
                mealFilter === filterTypes.vegan ? veganImg : veganImgGrayscale
              }
              alt="meat"
            />
            Vegan
          </ReceiptsFilterItem>
        </ReceiptsFilter>
        <ReceiptsGrid>
          {meals.map((receipt) => (
            <Link to={`/receipt/${receipt.id}`} key={receipt.id}>
              <ReceiptCard receipt={receipt} />
            </Link>
          ))}
        </ReceiptsGrid>
      </ReceiptsWrapper>
    </ReciptsC>
  );
};

export default Receipts;
