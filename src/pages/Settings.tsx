import Card from "../components/Card";

export default function Settings() {
  return (
    <div className="mx-auto flex max-w-xl flex-col gap-4">
      <h1 className="font-display text-xl text-primary-dark">Instellingen</h1>
      <Card>
        <p className="text-sm text-body/70">
          Hier komen ouder-instellingen: geluid, notificaties, account en
          privacy.
        </p>
      </Card>
    </div>
  );
}
