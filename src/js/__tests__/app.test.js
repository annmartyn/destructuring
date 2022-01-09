import getAttack from '../app.js';

const character = {
    name: '������',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
        {
            id: 8,
            name: '������� �������',
            icon: 'http://...',
            description: '������� ������� ������� ������� ����'
        },
        {
            id: 9,
            name: '������������� ����',
            icon: 'http://...'
            // <- �������� ��������, �������� "�����������"
        }
    ]
}

test('checking right attack list', () => {
    let attackList = getAttack(character);

    let expected = [
        {
            id: 8,
            name: '������� �������',
            icon: 'http://...',
            description: '������� ������� ������� ������� ����',
        },
        {
            id: 9,
            name: '������������� ����',
            icon: 'http://...',
            description: '�������� ����������',
        }
    ];

    expect(attackList).toEqual(expected);
})