export default {
    name : 'about',
    type : 'document',
    title : 'About',
    fields : [
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'imgUrl',
            title: 'ImageUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ]
}