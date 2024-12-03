import React from "react";
import styles from "./Select.module.scss";

interface CardServiceProps {
  children?: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<CardServiceProps> = ({
  children,
  options,
  value,
  onChange,
}) => {
  return (
    <div className={styles.selectContainer}>
      <h3 className={styles.select}>{children}</h3>
      <select className={styles.customSelect} value={value} onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
