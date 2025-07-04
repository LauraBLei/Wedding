import { useTranslation } from "react-i18next";

export const OvernatningSection = () => {
  const { t } = useTranslation();
  // Try both 'Rooms' and 'rooms' for translation keys
  const getTable = (base: string) => {
    const headersRaw = t(`${base}.table.headers`, { returnObjects: true });
    const rowsRaw = t(`${base}.table.rows`, { returnObjects: true });
    const isHeadersArray = Array.isArray(headersRaw);
    const isRowsArray = Array.isArray(rowsRaw);
    return {
      headers: isHeadersArray ? (headersRaw as string[]) : [],
      rows: isRowsArray ? (rowsRaw as string[][]) : [],
      valid: isHeadersArray && isRowsArray,
    };
  };
  let table = getTable("Rooms");
  if (!table.valid) table = getTable("rooms");

  return (
    <div className="w-full relative">
      <div className="md:mr-50 lg:mr-70">
        <h1 className="headline mb-5">{t("rooms.headline")}</h1>
        <div className="flex flex-col gap-2">
          <p>{t("rooms.textOne")}</p>
          <p>{t("rooms.textTwo")}</p>
          <p>{t("rooms.textThree")}</p>
          <p>{t("rooms.textFour")}</p>
        </div>
        <div className="overflow-x-auto mt-6 mb-4 text-xs md:text-lg">
          {table.valid ? (
            <table className="min-w-[350px] w-full rounded-lg">
              <thead>
                <tr>
                  {table.headers.map((header, idx) => (
                    <th key={idx} className="px-4 py-2  text-left">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j} className="px-4 py-2 ">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="text-red-500">
              Table data missing or invalid in translation file.
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-200/80">{t("rooms.small_text")}</p>
          <p className="text-sm text-gray-200/80">
            {t("rooms.small_text_two")}
          </p>
        </div>
      </div>
      <div>
        <img
          className="hidden md:block absolute right-0 md:h-[300px] lg:h-[400px] rotate-y-180 place-self-end"
          src="/flowers.png"
          alt=""
        />
      </div>
    </div>
  );
};
