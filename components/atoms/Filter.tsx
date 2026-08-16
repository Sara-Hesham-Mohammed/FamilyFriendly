import { useState } from "react";
// const teamItems: SelectItemType[] = [
//     { id: "engineering", label: "Engineering", supportingText: "12 users" },
//     { id: "design", label: "Design", supportingText: "10 users" },
//     { id: "product", label: "Product", supportingText: "6 users" },
//     { id: "marketing", label: "Marketing", supportingText: "8 users" },
//     { id: "sales", label: "Sales", supportingText: "12 users" },
//     { id: "customer-success", label: "Customer Success", supportingText: "4 users" },
//     { id: "operations", label: "Operations", supportingText: "2 users" },
//     { id: "finance", label: "Finance", supportingText: "2 users" },
// ];

// const getSelectedUserCount = (selectedKeys: Selection) => {
//     if (selectedKeys === "all") return teamItems.reduce((sum, t) => sum + parseInt(t.supportingText?.split(" ")[0] || "0"), 0);
//     const selected = teamItems.filter((t) => (selectedKeys as Set<string | number>).has(t.id));
//     return selected.reduce((sum, t) => sum + parseInt(t.supportingText?.split(" ")[0] || "0"), 0);
// };

// export const MultiSelectMdDemo = () => {
//     const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(["design", "product"]));

//     return (
//         <MultiSelect
//             isRequired
//             size="md"
//             label="Teams"
//             tooltip="This is a tooltip"
//             hint="This is a hint text to help user."
//             placeholder="Select teams"
//             items={teamItems}
//             selectedKeys={selectedKeys}
//             onSelectionChange={setSelectedKeys}
//             supportingText={`${getSelectedUserCount(selectedKeys)} users`}
//             onReset={() => setSelectedKeys(new Set())}
//             onSelectAll={() => setSelectedKeys(new Set(teamItems.map((t) => t.id)))}
//         >
//             {(item) => (
//                 <MultiSelect.Item id={item.id} supportingText={item.supportingText} selectionIndicator="checkbox" selectionIndicatorAlign="left">
//                     {item.label}
//                 </MultiSelect.Item>
//             )}
//         </MultiSelect>
//     );
// };
