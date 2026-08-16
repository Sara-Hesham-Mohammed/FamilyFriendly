// import { useState } from "react";
// const genres: SelectItemType[] = [
//     { id: "adventure", label: "Adventure"},
//     { id: "romance", label: "Romance"},
// ];

// const ageRating: String[] = [
//     "12+", "15+", "18+"
// ];

// export const MultiSelectMdDemo = () => {
//     const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(["design", "product"]));

//     return (
//         <MultiSelect
//             isRequired
//             size="md"
//             label="Genres"
//             tooltip="This is a tooltip"
//             hint="This is a hint text to help user."
//             placeholder="Select genres"
//             items={genres}
//             selectedKeys={selectedKeys}
//             onSelectionChange={setSelectedKeys}
//             onReset={() => setSelectedKeys(new Set())}
//             onSelectAll={() => setSelectedKeys(new Set(genres.map((t) => t.id)))}
//         >
//             {(item) => (
//                 <MultiSelect.Item id={item.id} supportingText={item.supportingText} selectionIndicator="checkbox" selectionIndicatorAlign="left">
//                     {item.label}
//                 </MultiSelect.Item>
//             )}
//         </MultiSelect>
//     );
// };
