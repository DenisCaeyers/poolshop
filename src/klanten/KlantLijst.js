import React, { Component } from 'react';

// Tablar
import { Table } from "tabler-react";

// JSON
import customerData from "../data/customers.json";

class KlantLijst extends Component {
    render() {
        return (
            <Table bodyItems=
            {[
                {
                  key: 1,
                  item: [
                    { content: "1" },
                    { content: "Jon" },
                    { content: "Edit"},
                  ],
                },
              ]}>
                <Table.Header>
                    <Table.Row>
                        <Table.ColHeader>ID</Table.ColHeader>
                        <Table.ColHeader>Achternaam</Table.ColHeader>
                        <Table.ColHeader>Voornaam</Table.ColHeader>
                        <Table.ColHeader>Adres</Table.ColHeader>
                        <Table.ColHeader>Postcode</Table.ColHeader>
                        <Table.ColHeader>Stad/Gemeente</Table.ColHeader>
                        <Table.ColHeader>Bedrijfsnaam</Table.ColHeader>
                        <Table.ColHeader>BTW Nr</Table.ColHeader>
                    </Table.Row>
                </Table.Header>
            </Table>
        )
    }
}
export default KlantLijst;