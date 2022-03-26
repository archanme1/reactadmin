import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 234329,
      product: "Hp Omen 15",
      img: "https://www.omen.com/content/dam/sites/omen/worldwide/laptops/omen-15-laptop/2-0/starmade-15-50-w-numpad-4-zone-oled-shadow-black-nt-h-dcam-non-odd-non-fpr-freedos-core-set-front-right-copy.png",
      customer: "Archan Bhatta",
      date: "5th May",
      amount: 158000,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 765458367,
      product: "PlayStaion 5",
      img: "https://d2skuhm0vrry40.cloudfront.net/2020/articles/2020-07-21-14-25/ps5_pre_order_header.jpg/EG11/thumbnail/732x412/format/jpg/quality/50",
      customer: "Hemant Upadhayay",
      date: "5th May",
      amount: 15000,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 7834965,
      product: "S20 FE",
      img: "https://www.androidauthority.com/wp-content/uploads/2020/10/Samsung-Galaxy-S20-FE-rear-profile-1.jpg",
      customer: "Nishant Upadhayay",
      date: "1st Sep",
      amount: 40000,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 87897896,
      product: "Redragon S101",
      img: "https://static-01.daraz.com.np/p/8a3518e84ebf62e86f4eca94aa6c0486.jpg",
      customer: "Sovit Bhatta",
      date: "24th Sep",
      amount: 5000,
      method: "Online",
      status: "Approved",
    },

    {
      id: 23489501,
      product: "Aus Rog Strix",
      img: "https://cdn.pocket-lint.com/r/s/970x/assets/images/155704-laptops-review-asus-scar-g15-2021-review-chassis-image2-hwxadwj40y.jpg",
      customer: "Cp Arc",
      date: "2nd April",
      amount: 400000,
      method: "Online",
      status: "Pending",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking Id</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
