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

  it("should not accept a blank server on submitserverinfo()", function()
  {
    serverNameInput.value = "";
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
  })
  it("should update server table on updateservertable()", function()
  {
    submitServerInfo();
    updateServerTable();

      let curtdlist = document.querySelectorAll("#serverTable tbody tr td");
      expect (curtdlist.length).toEqual(2);
  })
  afterEach(function() {
    // teardown logic
    serverTbody.innerHTML= ""
    serverId=0;
    allServers={}
  });

});
