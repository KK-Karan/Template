
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell , getKeyValue} from "@nextui-org/react";
import {Chart as ChartJS} from "chart.js/auto"
import {Line} from 'react-chartjs-2'
import './table.css'
function Tables() {

  const rows = [
    {
      key: "1",
      name: "Tony Reichert",
      role: "CEO",
      graph: <Line
        data = {{
          labels:['A' , 'B' , 'C'],
          datasets:[
            {
              label:'Revenue',
              data:[200,300,400,500]
            }
          ]
        }}
        options={{
          maintainAspectRatio:false,
          responsive:false,
          height:10,
          width:10,
        }}
      />
    },
    {
      key: "2",
      name: "Zoey Lang",
      role: "Technical Lead",
      graph:<Line
      data = {{
        labels:['A' , 'B' , 'C'],
        datasets:[
          {
            label:'Revenue',
            data:[200,300,400,500]
          }
        ]
      }}
      options={{
        maintainAspectRatio:false,
        responsive:false,
        height:10,
        width:10,
      }}
    />
    },
    {
      key: "3",
      name: "Jane Fisher",
      role: "Senior Developer",
      graph: <Line
        data = {{
          labels:['A' , 'B' , 'C'],
          datasets:[
            {
              label:'Revenue',
              data:[200,300,400,500]
            }
          ]
        }}
        options={{
          maintainAspectRatio:false,
          responsive:false,
          height:10,
          width:10,
        }}
      />
    },
    {
      key: "4",
      name: "William Howard",
      role: "Community Manager",
      graph: <Line
        data = {{
          labels:['A' , 'B' , 'C'],
          datasets:[
            {
              label:'Revenue',
              data:[200,300,400,500]
            }
          ]
        }}
        options={{
          maintainAspectRatio:false,
          responsive:false,
          height:10,
          width:10,
        }}
      />
    },
  ];
  
  const columns = [
    {
      key: "name",
      label: "AMERICAS",
    },
    {
      key: "role",
      label: "RMI",
    },
    {
      key: "status",
      label: "2DAY",
    },
    {
      key:'graph',
      label:'VALUE'
    },
    {
      key:'netchg',
      label:'NET CHG'
    },
    {
      key:'%chg',
      label:'%CHG'
    },
    {
      key:'avat',
      label:'AVAT'
    },
    {
     key:'time',
     label:'TIME' 
    },
    {
      key:'ytd',
      label:'%YTD'
    },
    {
      key:'ytdcur',
      label:'%YTD CUR'
    }
  ];

    return (
      <>
      <div className="tables">
         <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
      </div>
      </>
    )
  }
  
  export default Tables