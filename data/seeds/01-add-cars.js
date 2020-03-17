
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {registration: 'LA51 ABC', make: 'Porche', model:'911',milage:'32000', manualtransmission:true, status:'cleaned'},
        {registration: 'LA51 ABD', make: 'Alpha romeo', model:'75',milage:'63000', manualtransmission:true, status:'cleaned'},
        {registration: 'LA51 ABE', make: 'Austen-healy', model:'Sprite',milage:'42000', manualtransmission:true, status:'cleaned'},
        {registration: 'LA51 ABF', make: 'Bugatti', model:'EB110',milage:'39000', manualtransmission:true, status:'cleaned'},
        {registration: 'LA51 ABG', make: 'Jaguar', model:'e-type',milage:'102000', manualtransmission:true, status:'dented'},
      ]);
    });
};
