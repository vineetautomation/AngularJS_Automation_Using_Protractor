
describe('Enter Name Feature',function()
{
    it('Shoud enter name as VineetAutomation',function()
    {
        browser. driver. manage(). window(). maximize();
        browser.get('https://angularjs.org/');
        element(by.model('yourName')).sendKeys('VineetAutomation');
        var text = element(by.xpath('/html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));
        expect(text.getText()).toEqual('Hello VineetAutomation!');

    });
});

describe('Free CRM title test',function()
{
    it('get title test',function()
    {
        browser. driver. manage(). window(). maximize();
        browser.get('http://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login');
        expect(browser.getTitle()).toEqual('AngularJS User Registration and Login Example');
    });

});

describe('Registration Feature',function()
{
    it('get registration test',function()
    {
        browser. driver. manage(). window(). maximize();
        browser.get('http://www.globalsqa.com/angularJs-protractor/registration-login-example/#/login');
        element(by.xpath('/html/body/div[1]/div/div/div/div/form/div[3]/a')).click();
        element(by.model('vm.user.firstName')).sendKeys('Ankur');
        element(by.model('vm.user.lastName')).sendKeys('Srivastava');
        element(by.model('vm.user.username')).sendKeys('ankur5');
        element(by.model('vm.user.password')).sendKeys('ankur@123');
        element(by.xpath('/html/body/div[1]/div/div/div/div/form/div[5]/button')).click();
        browser.sleep(5000);
        var registraiontext = element(by.xpath('/html/body/div[1]/div/div/div[1]'));
        expect(registraiontext.getText()).toEqual('Registration successful');
    });
});

describe('MultiformFeature',function()
{
    it('get multiform feature test',function(){

        browser. driver. manage(). window(). maximize();
        browser.get('http://www.globalsqa.com/angularJs-protractor/Multiform/#/form/profile');
        element(by.model('formData.name')).sendKeys('Ankur');
        browser.sleep(1000);
        element(by.model('formData.email')).sendKeys('ankur@gmail.com');
        browser.sleep(1000);
        element(by.xpath('//*[@id="form-views"]/div[3]/div/a')).click();
        browser.sleep(1000);
        element(by.xpath('//*[@id="form-views"]/div[1]/div[1]/label/input')).click();
        browser.sleep(1000);
        element(by.xpath('//*[@id="form-views"]/div[2]/div/a')).click();
        browser.sleep(1000);
        element(by.xpath('//*[@id="form-views"]/div/button')).click();
        browser.sleep(1000);
        var text=browser.switchTo().alert().getText();
        expect(text).toEqual('awesome!');
        browser.switchTo().alert().accept();
    });
});

describe('DropdownFeature',function()
{
    it('get dropdown feature test',function(){

        browser. driver. manage(). window(). maximize();
        browser.get('https://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys('13');
        browser.sleep(1000);
        element(by.model('second')).sendKeys('12');
        browser.sleep(1000);
        var select = element(by.model('operator'));
        select.$('[value="MULTIPLICATION"]').click();
        browser.sleep(1000);
        element(by.xpath('//*[@id="gobutton"]')).click();
        browser.sleep(1000);
        var result = element(by.xpath('/html/body/div/div/form/h2'));
        expect(result.getText()).toEqual('156');
        browser.sleep(1000);
    });
});