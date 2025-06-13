"use client"
import { InputDeliveryProps } from "./interface"

export default function InputDelivery({
    ClassNameDiv,
  ClassNameLabel,
  ClassNameInput,
  value,
  onChange,
  hasDeliveryTime,
  onToggleDeliveryTime,
}: InputDeliveryProps) {
  const deliveryType = hasDeliveryTime ? "datetime-local" : "date"

  return (
    <div className={`flex flex-col w-full ${ClassNameDiv}`}>
      <div className="flex w-full gap-4 justify-between">
        <label className={`text-sky-100 mb-1 ${ClassNameLabel}`}>
          Delivery date
        </label>
        <div>
          <label
            htmlFor="checkTime"
            className="cursor-pointer flex items-center text-sm text-gray-600"
          >
            <input
              type="checkbox"
              name="checkTime"
              id="checkTime"
              checked={hasDeliveryTime}
              onChange={(e) => onToggleDeliveryTime(e.target.checked)}
              className="mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            Incluir horário
          </label>
        </div>
      </div>

      <input
        type={deliveryType}
        className={`w-full pl-2 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors ${ClassNameInput}`}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
