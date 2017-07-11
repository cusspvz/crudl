/* globals jest, require, test, expect, describe, it, beforeEach */

import React from 'react'
import { shallow } from 'enzyme'
import ListViewItem from '../../components/ListViewTableItem'

const props = {
    itemId: 'id',
    fields: [
        {
            label: 'Name',
            name: 'name',
            getValue: data => data.name,
            main: true,
            sortKey: 'slug',
            sortable: true,
            sorted: 'ascending',
            sortpriotity: 1,
        },
        {
            label: 'Slug',
            name: 'slug',
            getValue: data => data.slug,
            main: false,
            sortKey: 'slug',
            sortable: true,
            sorted: 'none', /* FIXME (Vaclav): why should this be "none"? */
            sortpriotity: undefined,
        },
    ],
    data: {
        name: 'Test name',
        slug: 'Test slug',
    },
    onClick: jest.fn,
}

describe('ListViewItem', () => {
    it('renders correctly', () => {
        const header = shallow(
            <ListViewItem {...props} />
        )
        expect(header.find('tr').length).toEqual(1)
        expect(header.find('th.main').length).toEqual(1)
        expect(header.find('td').length).toEqual(1)
    })
})
