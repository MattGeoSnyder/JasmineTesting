describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should have a row for each server', function(){
    allServers = {};
    names = ['Alice', 'Bob', 'Carl'];
    serverId = 0;

    for (let serverName of names) {
      serverId++;
      allServers['server' + serverId] = { serverName };
    }
    
    updateServerTable();
    let servers = document.querySelectorAll('#serverTable tbody tr');
    expect(servers.length).toEqual(3);

  })

  afterEach(function() {
    allServers = {};
    updateServerTable();
  });
  
});
