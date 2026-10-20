import { ButtonLink } from '../components/ui';

export default function NotFound() {
  return (
    <section className="section" style={{ minHeight: '90vh', display: 'grid', alignItems: 'center', paddingTop: 160 }}>
      <div className="wrap">
        <p className="kicker">404</p>
        <h1 className="t-h1" style={{ margin: '20px 0 28px', maxWidth: '12em' }}>
          This trail doesn’t lead anywhere
        </h1>
        <p className="t-lead t-muted" style={{ marginBottom: 36 }}>
          The page may have moved. Head back home or tell us what you were looking for.
        </p>
        <ButtonLink to="/">Back to home</ButtonLink>
      </div>
    </section>
  );
}
